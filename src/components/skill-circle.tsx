import styles from "@/stylesheets/main.module.css";
import {expYears} from "@/utils/skills";
export default function Skills(props: {title: string, experience?: number, totalTime: number}) {

	const amount = props.experience ? (props.experience / expYears) : 1;

	let cssString = "";
	if(amount === 1) {
		cssString = "#8888FF";
	} else {
		cssString = `conic-gradient(
			from 0deg at 50% 50%,
			#8888FF                         0deg,
			#8888FF ${    (amount * 360 - 1)}deg,
			transparent ${(amount * 360    )}deg,
			transparent                   360deg
		)`;
	};

	const styleProp = {
		height:"100%",
		width:"100%",
		background: cssString,
	}

	return (
		<div className="line-item" style={styles}>
			<label>{props.title}</label>
			<div className="skill circle container">
				<svg
					viewBox="0 0 200 200"
					xmlns="http://www.w3.org/2000/svg"
					style={{ borderRadius: '50%' }}
					fill="transparent"
				>
					<foreignObject x="0" y="0" height="200" width="200" clipPath="url(#donut)" clipRule="evenodd" >
						<div
							className="donut"
							style={styleProp}
						></div>
					</foreignObject>
					<clipPath id="donut" height="100%" width="100%">
						<path
							fill="black"
							fillRule="evenodd"
							clipRule="evenodd"
							d="M100 200C155.2 200 200 155.2 200 100C200 44.8 155.2 0 100 0C44.8 0 0 44.8 0 100C0 155.2 44.8 200 100 200ZM100 160C133.137 160 160 133.137 160 100C160 66.8628 133.137 40 100 40C66.8628 40 40 66.8628 40 100C40 133.137 66.8628 160 100 160Z"
						/>
					</clipPath>
				</svg>
			</div>
		</div>
	)
};