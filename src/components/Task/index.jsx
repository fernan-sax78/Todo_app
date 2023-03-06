import styles from './task.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faCheckCircle} from '@fortawesome/free-solid-svg-icons';


function Task({task,onComplete,onDelete}) {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer} onClick = {()=> onComplete(task.id)}>
        {task.isCompleted ? <FontAwesomeIcon icon = {faCheckCircle} /> :  <div/>}
      </button>
      

      <p className={task.isCompleted ? styles.textCompleted : ''}>{task.title}</p>
      <button className={styles.deleteButton} onClick = {() => onDelete(task.id)}>
      <FontAwesomeIcon icon={faTrash}/>
      </button>
    </div>
  )
}

export default Task;