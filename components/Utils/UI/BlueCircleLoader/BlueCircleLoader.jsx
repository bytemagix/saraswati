import styles from './BlueCircleLoader.module.css'
import { css } from "@emotion/react";
import CircleLoader from "react-spinners/CircleLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const BlueCircleLoader = props => {

    return (
        <div className={styles['loader']}>
            <CircleLoader color="blue" loading={true} css={override} size={150} />
        </div>
    );
}

export default BlueCircleLoader;