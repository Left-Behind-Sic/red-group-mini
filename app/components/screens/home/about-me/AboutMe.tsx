import Image from "next/image";
import React from "react";
import {APP_URL} from "../../../../constants";
import {IMe} from "../../../../interfaces/IMe";
import styles from "./AboutMe.module.scss";
import DescriptionButton from "./description-button/DescriptionButton";
import EmailButton from "./email-button/EmailButton";

interface Props {
  me: IMe;
}

const AboutMe = ({me}: Props) => {
  return (
    <div className={styles.me}>
      <div className={styles['image-wrapper']}>
        <Image
          src={`${APP_URL}${me.avatar}`}
          width={190}
          height={190}
          className={styles.image}
          alt={me.siteName}
          quality={100}
        />
      </div>
      <div className={styles.heading}>
        <span>Red Group</span>
        <Image
          src={`${APP_URL}/icons/verified.svg`}
          alt=""
          height={16}
          width={16}
        />
      </div>
      <EmailButton/>
      <DescriptionButton description={me.description}/>
    </div>
  );
};

export default AboutMe;
