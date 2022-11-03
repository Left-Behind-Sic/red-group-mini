import React from "react";
import { ILinks } from "../../../../interfaces/ILinks";
import AnimateBlock from "../../../ui/animate-block/AnimateBlock";
import styles from "./Grid.module.scss";

interface Props {
	link: ILinks;
}

const GridItem = ({ link }: Props) => {
	return (
		<a
			href={link.link}
			rel="noreferrer"
			target="_blank"
			className={styles.item}
		>
			<div
				className={styles.gradient}
				style={{
					backgroundImage: `linear-gradient(to right, ${link.gradient.from} 0%, ${link.gradient.to} 51%, ${link.gradient.from} 100%)`,
				}}
			>
				<img src={link.icon.path} alt="" width={link.icon.width} />
			</div>
			<div className={styles.title}>{link.title}</div>
			{link.isImportant ? <AnimateBlock /> : null}
		</a>
	);
};

export default GridItem;
