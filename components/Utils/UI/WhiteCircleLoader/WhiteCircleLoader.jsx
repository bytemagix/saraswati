import styles from './WhiteCircleLoader.module.css';
import { css } from "@emotion/react";
import CircleLoader from "react-spinners/CircleLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const WhiteCircleLoader = props => {

    return (
        <div className={styles['send-data-modal']}>
            <CircleLoader color="white" loading={true} css={override} size={150} />
        </div>
    );
}

export default WhiteCircleLoader;