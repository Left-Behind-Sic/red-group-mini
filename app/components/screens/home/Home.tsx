import React from "react";
import {ILinks} from "../../../interfaces/ILinks";
import {IMe} from "../../../interfaces/IMe";
import Circles from "../../ui/circles/Circles";
import MetaTitle from "../../ui/MetaTitle";
import AboutMe from "./about-me/AboutMe";
import Grid from "./grid/Grid";
import styles from "./Home.module.scss";
import RecentVideos from "./recent-videos/RecentVideos";

interface Props {
	links: ILinks[];
	me: IMe;
}

export default function Home({ links, me }: Props) {
	return (
		<section className={styles.section}>
			<MetaTitle title="Red Links" />
			<div className={styles.container}>
				<AboutMe me={me} />
				<RecentVideos />
				<Grid links={links} />
			</div>
			<Circles />
		</section>
	);
}
