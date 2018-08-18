const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto('http://bnuz.edu.cn')
  await page.screenshot({path: './snapshot.png', fullPage: true})

  await browser.close()
})()