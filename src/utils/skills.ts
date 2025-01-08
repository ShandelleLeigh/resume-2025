import {milliseconds } from "@/utils/time";

type L1 = string | symbol;
interface SkillList {
	[key: L1]:
		Array<{title: string, level?: number, experience?:number}>;
}


export const currentDate = new Date();
export const currentYear = currentDate.getFullYear();
export const startDate = new Date("April 1, 2018");
export const expYears = (currentDate.valueOf() - startDate.valueOf()) / (milliseconds.in.year);

export const toYearsMonths = (date: number) => {
    const years = Math.floor(date);
    const months = Math.round((date - years) * 12);
    const dateString = `${years} years ${months} months`;
    return dateString;
}

console.log("Year now: ", currentYear, toYearsMonths(expYears));

export const skillsList: SkillList = {
	"language": [
		{title: "JavaScript", experience: 7},
		{title: "HTML",       experience: 7},
		{title: "CSS",        experience: 7},
		{title: "TypeScript", experience: 5},
		{title: "PHP",        experience: 2},
		{title: "Ruby",       experience: 2},
	],
	"framework": [
		{title: "Vue.js"},
		{title: "Node.js"},
		{title: "React.js"},
	],
	"tools": [
		{title: "CLI, Terminal"},
		{title: "Git"},
		{title: "WordPress"},
		{title: "NPM"},
	],
	"apps": [
		{title: "GitHub"},
		{title: "Figma"},
		{title: "Adobe XD"},
		{title: "Adobe Illustrator"},
	],
};
