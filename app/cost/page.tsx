'use client';

const Cost = () => {
    const services = [
        { name: 'Potvrdenia pre administratívne účely na žiadosť poistenca', price: '10€' },
        { name: 'Vyšetrenie hladiny FeNO', price: '15€' },
        { name: 'Poplatok za nedodržanie a blokovanie dohodnutého termínu', price: '5€' },
        { name: 'Vyšetrenie mimo ordinačného času - prvovyšetrenie', price: '20€' },
        { name: 'Vyšetrenie mimo ordinačného času - kontrolné', price: '10€' },
        { name: '* Ročný poplatok za sližby telefonickej a mailovej podpory', price: '10€' },
    ];

    const servicesTwo = [
        { name: 'Prvé kompletné vyšetrenie, zhodnotenie stavu a plán ďalších vyšetrení a liečby', price: '50€' },
        { name: 'Kontrolné vyšetrenie', price: '10€' },
        { name: 'Prick testy - za každý vpich', price: '2€' },
        { name: 'Krvné odbery - za každú skúmavku (indikované iným lekárom)', price: '3€' },
        { name: 'Podanie injekcie (indikované iným lekárom)', price: '5€' },
        { name: 'Podanie infúzie v trvaní 10 - 30 min.', price: '15€' },
        { name: 'Spirometrické vyšetrenie základné', price: '12€' },
        { name: 'Bronchodiatačný test', price: '20€' },
        { name: 'Hodnotenie laboratórnych výledkov od iných lekárov', price: '8€' },
        { name: 'Individuálna konzultácia ohľadom zdrav.stavu, nevyžadujúca vyšetrenie, za každých začatých 15 min.', price: '15€' },
        { name: 'Výdychový expozičný test na vyšetrenie laktózovej intolerancie alebo SIBO syndrómu', price: '25€' },
        { name: 'Opätovné vystavenie receptu (pri strate alebo vypršaní platnosti', price: '2€' },

    ];


    return (
        <section className="flex container flex-col items-center justify-center  text-text">
            <span className="text-text text-center">Zoznam zdravotných výkonov a služieb, pri torých maožno požadovať úhradu</span>
            <h2 className="text-2xl font-semibold mb-6 text-text text-center">Cenník poplatkov LEKIA s.r.o</h2>


            <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 ">
                <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden">
                    <p className="text-center font-semibold text-sm sm:text-[16px] p-2  bg-primary text-white">Cenník poplatkov LEKIA s.r.o - platnosť od 1.11.2021</p>
                    <div className="px-4 sm:px-0">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-primary/20">
                                    <th className="text-left px-6 py-3 border">Služba</th>
                                    <th className="text-left px-6 py-3 border">Cena</th>
                                </tr>
                            </thead>
                            <tbody>
                                {services.map((service, index) => (
                                    <tr key={index} className="border-t">
                                        <td className="px-6 py-3">{service.name}</td>
                                        <td className="px-6 py-3">{service.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="p-6">
                            <h6 className="font-semibold my-2">* Táto služba obsahuje:</h6>
                            <li className="text-sm">Oznámenie o neprítomnosti lekára objednaným pacientom</li>
                            <li className="text-sm">Mailová komunikácia s pacientom - krátke konzultácie ohľadom zdravotného stavu pacienta, poradenstvo apod.</li>
                            <li className="text-sm">Odosielanie elektronických receptov</li>
                            <p className="text-sm">Tento poplatok je jednorázový, služba je k dizpozícii 12 mesiacov od jej uhradenia.Mailová podpora je dostupná na adrese.....,telefonická na čísle <strong>0918 243 490</strong> počas pracovnej doby ambulacie.</p>
                        </div>
                    </div>

                </div>


                <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden">
                    <h3 className="text-center font-semibold text-nowrap text-sm sm:text-[16px] p-2 bg-primary text-white">Vyšetrenia na vlastnú žiadosť alebo mimo zdravotného poistenia</h3>
                    <div className="px-4 sm:px-0">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-primary/20">
                                    <th className="text-left px-6 py-3 border">Služba</th>
                                    <th className="text-left px-6 py-3 border">Cena</th>
                                </tr>
                            </thead>
                            <tbody>
                                {servicesTwo.map((service, index) => (
                                    <tr key={index} className="border-t">
                                        <td className="px-6 py-3 ">{service.name}</td>
                                        <td className="px-6 py-3 ">{service.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Cost;
