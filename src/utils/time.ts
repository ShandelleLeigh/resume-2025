const C = {
	MS_SEC:  1000,
	SEC_MIN:   60,
	MIN_HR:    60,
	HR_DAY:    24,
	DAY_YR:   365,
	MON_YR:    12,

};

// const time = {

// };

export const milliseconds = {
	in: {
		second: C.MS_SEC,
		minute: C.MS_SEC * C.SEC_MIN,
		hour:   C.MS_SEC * C.SEC_MIN * C.MIN_HR,
		day:    C.MS_SEC * C.SEC_MIN * C.MIN_HR * C.HR_DAY,
		year:   C.MS_SEC * C.SEC_MIN * C.MIN_HR * C.HR_DAY * C.DAY_YR,
	}

}

export const seconds = {
	in: {
		minute: C.SEC_MIN,
		hour:   C.SEC_MIN * C.MIN_HR,
		day:    C.SEC_MIN * C.MIN_HR * C.HR_DAY,
		year:   C.SEC_MIN * C.MIN_HR * C.HR_DAY * C.DAY_YR,
	}
}