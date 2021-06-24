import styles from './FilterButton.module.css';

const FilterButton = props => {
    
    let btnClass;

    if(props.selected){
        btnClass = "selected";
    }else{
        btnClass = "unselected";
    }

    return (
        <button className={styles[btnClass]} onClick={props.onClick}>{props.title}</button>
    );
}

export default FilterButton;