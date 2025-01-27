import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function GET() {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();

    const doctorUrl = 'https://www.ecasenka.sk/ordinacia/mudrmarinahantakova-lekar';
    await page.goto(doctorUrl, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('#notice'); // Počkaj na načítanie elementu

    const data = await page.evaluate(() => {
        const noticeElement = document.querySelector('#notice');
        if (!noticeElement) {
          return { error: 'Údaje neboli nájdené.' };
        }
      
        const vacationInfo = noticeElement.querySelector('p:nth-child(2)')?.textContent?.trim() || 'Nie je dostupné';
        const patientTime = noticeElement.querySelector('p:nth-child(1)')?.textContent?.trim();
      
        // Ak je pacienti objednaní na čas prázdny, nastav "Nie je dostupné"
        const patientTimeText = patientTime ? patientTime : 'Nie je dostupné';
      
        return { vacationInfo, patientTime: patientTimeText };
      });
      
    await browser.close();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Chyba pri načítavaní údajov:', error);
    return NextResponse.json({ error: 'Nastala chyba pri načítavaní údajov.' }, { status: 500 });
  }
}
