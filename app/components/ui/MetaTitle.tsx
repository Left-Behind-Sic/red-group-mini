import Head from "next/head";
import React from "react";

interface Props {
	title: string;
}

const MetaTitle = ({ title }: Props) => {
	return (
		<Head>
			<title>{title}</title>
		</Head>
	);
};

export default MetaTitle;
