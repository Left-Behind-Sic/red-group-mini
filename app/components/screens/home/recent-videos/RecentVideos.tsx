import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { IYoutube } from "../../../../interfaces/IYoutube";
import styles from "./RecentVideos.module.scss";
import VideoItem from "./VideoItem";

const RecentVideos = () => {
	const { data, isLoading } = useQuery(
		"recent videos",
		() => axios.get<IYoutube[]>("api/youtube"),
		{ select: ({ data }) => data }
	);

	return (
		<div className={styles.wrapper}>
			<div className={styles.heading}>
				Новые видео <span>👉</span>
			</div>
			{isLoading
				? "Loading"
				: data?.length
				? data.map((video) => <VideoItem key={video.videoId} item={video} />)
				: null}
		</div>
	);
};

export default RecentVideos;
