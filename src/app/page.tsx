import Header from "@/components/Header";
import Content from "@/components/Content";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex justify-center items-center mt-36 p-4">
        <Header/>

        <div className='flex flex-col gap-8 m-t'>

            <Content
                url='https://academy.army.md/wp-content/uploads/2012/08/banner_futured_infanteria.jpg'
                title='Bun venit pe site-ul Academiei Militare „Alexandru cel Bun”'
                subtitle=''
                text='Cooperarea internaţională a Academiei Militare „Alexandru cel Bun” are un aspect important al vieţii universitare, care contribuie la integrarea învăţămîntului militar superior european şi mondial şi în acelaşi timp, este o sursă semnificativă de finanţare a educaţiei şi cercetărilor. Aceasta permite modernizarea continuă a academiei şi oferă un spectru larg de acţiuni care favorizează aprecierea la nivel înalt de profesionalism. Academia Militară colaborează cu diverse centre ştiinţifice şi alte instituţii din UE, CSI și SUA.'/>
            <Content
                url='https://realitatea.md/wp-content/uploads/2021/08/DSC_1846.jpg'
                title='Studenții batalionului de învățământ desfășoară ședințe practice la Baza Militară de Instruire a Armatei Naționale de la Bulboaca'
                subtitle=''
                text='Această activitate are drept scop dezvoltarea abilităților de luptă și consolidarea cunoștințelor teoretice dobândite în timpul pregătirii academice. Studenții se angajează într-un program intensiv de pregătire, care include executarea tragerilor de luptă și diverse exerciții tactice.

Ședințele practice oferă studenților oportunitatea de a-și aplica cunoștințele teoretice într-un mediu realist și de a dezvolta abilități esențiale pentru viitoarea lor carieră militară.

Studenții sunt ghidați de către cadrele didactice și de către comandanții de subunități care le oferă îndrumare și feedback constant în vederea dezvoltării lor profesionale. Ieșirea de campanie reprezintă o etapă importantă în formarea și pregătirea studenților militari ai Academiei Militare a Forțelor Armate „Alexandru cel Bun”.'/>
            <Content
                url='https://www.romaniaregala.ro/wp-content/uploads/2015/02/image-02.jpg'
                title='Conferința științifică internațională „Republica Moldova în contextul noii arhitecturi de securitate regională”'
                subtitle=''
                text='Academia Militară a Forțelor Armate „Alexandru cel Bun” a desfășurat la data de 25 mai 2023 Conferința științifică internațională „Republica Moldova în contextul noii arhitecturi de securitate regională”.

Aria tematică a evenimentului științific menționat au fost următoarele subiecte : – cercetări strategice interdisciplinare de apărare și securitate în contextul securității naționale a Republicii Moldova; – impactul războiului din Ucraina asupra securității Republicii Moldova; – impactul războiului din Ucraina asupra securității continentului european; – rolul NATO în menținerea securității în Europa;- problematica transnistreană în contextul evenimentelor din Ucraina;- schimbarea ordinii internaționale determinată de războiul din Ucraina.'/>

         <Footer/>
        </div>


    </main>
  )
}
