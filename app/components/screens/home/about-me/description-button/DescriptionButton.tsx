import React from "react";
import {useOutside} from "../../../../../hooks/useOutside";
import styles from "./DescriptionButton.module.scss";
import cn from "classnames";
import parse from "html-react-parser";

interface Props {
  description: string;
}

const DescriptionButton = ({description}: Props) => {
  const {isShow, ref, setIsShow} = useOutside(false);

  return (
    <div className={styles.parent} ref={ref}>
      <button
        onClick={() => setIsShow(!isShow)}
        className={cn({[styles.active]: isShow})}
      >
        <span>Обо мне</span>
      </button>
      {isShow ? <article>{parse(description)}</article> : null}
    </div>
  );
};

export default DescriptionButton;
