(async function () {
    const path = require('path')
    const puppeteer = require('puppeteer')
    const config = require('./config')

    // const chromePath = './Chromium.app/Contents/MacOS/Chromium'
    // const pathToExtension = path.join(__dirname, chromePath)

    // const browser = await puppeteer.launch({executablePath: pathToExtension})
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('http://localhost:7000')
    await page.pdf({
        path: config.output + '.pdf',
        format: 'A4',
        // 打印背景色
        printBackground: true
    })

    await page.screenshot({
        path: config.output + '.png',
        // 打印整页宽高
        fullPage: true
    })

    await browser.close()
    console.info('build done')
})()