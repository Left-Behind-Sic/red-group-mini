import React from "react";
import styles from "./EmailButton.module.scss";
import Image from "next/image";
import { APP_URL } from "../../../../../constants";

const EmailButton = () => {
	return (
		<div className={styles.button}>
			<a
				href="mailto:info@htmllessons.ru"
				target="_blank"
				rel="noreferrer"
				title="info@htmllessons.ru"
			>
				<span>
					<Image
						src={`${APP_URL}/icons/email.svg`}
						alt=""
						height={18}
						width={18}
					/>
				</span>
				<span>Email</span>
			</a>
		</div>
	);
};

export default EmailButton;
