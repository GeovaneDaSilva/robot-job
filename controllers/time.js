
"use strict";
const pup = require('puppeteer')
const axios = require('axios');
const Time = require('../database/model/time')





const url = 'https://www.linkedin.com/checkpoint/lg/sign-in-another-account'
const urlJob = 'https://www.linkedin.com/jobs/'

let searchFor = 'mobile developer'
let username = 'geovaneartedesign@gmail.com'
let password = 'nelliebeach4205'
let location = 'United States'
let c = 1

const puppeteer = async(req, res) => {
  ( async () => {
    
    const browser = await pup.launch({
      headless: false,
      ignoreHTTPSErrors: true,
      args: ['--proxy-server=zproxy.lum-superproxy.io:22225'],
      
      defaultViewport: {
        width:1920,
        height:1080
      }
    });
    const page = await browser.newPage();

    await page.goto(url)

      await page.waitForSelector('#username')
    
      await page.type('#username', username)

      await page.waitForSelector('#password')
    
      await page.type('#password', password)
      

     await Promise.all([
        page.waitForNavigation(),
        page.click('.login__form_action_container')
    ]) 

    //Search Job

      await page.goto(urlJob)

   

    
      
      await page.waitForSelector('.jobs-search-box__text-input')
      await page.type('.jobs-search-box__text-input', searchFor)

      setTimeout(async () => {
      await page.waitForSelector('#jobs-search-box-location-id-ember30')
      await page.type('#jobs-search-box-location-id-ember30', location)
      
      }, 1000)

      setTimeout(async () => {
        await page.keyboard.press("Enter");
        
        }, 2000)
      
        setTimeout(async () => {
          const links = await page.$$eval('.jobs-search-results__list > li > div > div > div > div > a', el => el.map(link => link.href));

          for(const link of links) {
      
            await page.goto(link)


            await page.waitForSelector('.t-24')

      
            const title = await page.$eval('.t-24', element => element.innerText)
      
            console.log(title)
            c++;
      
            
          }


          }, 10000)

       

        return

    

  })();
  

}

module.exports = {
  puppeteer
};

