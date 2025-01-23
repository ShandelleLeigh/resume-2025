// imports
import Intro from "@/components/intro";
// import Skills from "@/components/skill-circle";
import SkillLine from "@/components/skill-line";
import { skillsList } from "@/utils/skills";

const langList = skillsList["language"].map((item, index )=>
    <SkillLine
        title={item.title}
        key={item.title + "-" + index}
        experience={item.experience}

        totalTime={7}
    >
    </SkillLine>
)


// const skillLine = skillsList["language"].map((item, index )=>
//     <Skills
//         title={item.title}
//         key={item.title + "-" + index}
//         experience={item.experience ? item.experience : undefined}
//         totalTime={7}
//     ></Skills>
// )

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <Intro></Intro>
                <div>
                    <h3>Skills, Languages, Tools</h3>
                    {langList}
                    {/* {skillLine} */}
                </div>
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

            </footer>
        </div>
    );
}
