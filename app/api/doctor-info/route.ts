import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function GET() {
    try {
      const browser = await puppeteer.launch({ headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'] 
       });
      const page = await browser.newPage();
  
      const doctorUrl = 'https://www.ecasenka.sk/ordinacia/mudrmarinahantakova-lekar';
      await page.goto(doctorUrl, { waitUntil: 'domcontentloaded' });
      await page.waitForSelector('#notice' ,{ timeout: 3000}); // Počkaj, kým sa objaví element s ID 'notice'
        
      // Debug: Uloženie HTML stránky
      const html = await page.content();
      console.log('HTML stránky:', html);
  
      const data = await page.evaluate(() => {
        const noticeElement = document.querySelector('#notice');
        if (!noticeElement) {
          return { error: 'Údaje neboli nájdené.' };
        }
      
        // Vytlačíme celý obsah notice na debuggovanie
        console.log(noticeElement.innerHTML);
      
        // Skúsime iný spôsob, ako extrahovať prvý a druhý paragraf
        const paragraphs = noticeElement.querySelectorAll('p');
        const vacationInfo = paragraphs.length > 1 ? paragraphs[1].textContent?.trim() : 'Nie je dostupné';
        const patientTime = paragraphs.length > 0 ? paragraphs[0].textContent?.trim() : 'Nie je dostupné';
      
        return { vacationInfo, patientTime };
      });
        
      await browser.close();
  
      return NextResponse.json(data);
    } catch (error) {
      console.error('Chyba pri načítavaní údajov:', error);
      return NextResponse.json({ error: 'Nastala chyba pri načítavaní údajov.' }, { status: 500 });
    }
  }