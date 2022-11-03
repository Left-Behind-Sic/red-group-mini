import React from "react";
import { ILinks } from "../../../../interfaces/ILinks";
import styles from "./Grid.module.scss";
import GridItem from "./GridItem";

interface Props {
	links: ILinks[];
}

const Grid = ({ links }: Props) => {
	return (
		<div className={styles.grid}>
			{links.map((link) => (
				<GridItem key={link._id} link={link} />
			))}
		</div>
	);
};

export default Grid;
