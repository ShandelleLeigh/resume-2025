"use client";

import styles from "@/stylesheets/main.module.css";
// import {expYears} from "@/utils/skills";
import { useEffect, useRef, useState } from "react";
export default function Skills(props: {title: string, experience?: number, totalTime: number}) {

	function roundNumber( x: number ){
		return Math.min(Math.ceil(x * 100 / 7), 100)
	}

	const amount = useRef(0);

	// let cssString = "";

	const [loaded, setLoaded] = useState(false);

	useEffect(()=> {
		setLoaded(true);
		amount.current = props.experience ? roundNumber(props.experience) : 100;
	}, [props.experience ]);



	const styleProp = {
		width: `${amount}%`,
	}

	return (
		<div className="line-item" style={styles}>
			<label>{props.title}</label>
			<label>{amount.current}</label>
			<div className="skill line container">
				<div className={"skill item " + (loaded ? "show" : "hide")}
					style={styleProp}
				></div>
			</div>
		</div>
	)
};