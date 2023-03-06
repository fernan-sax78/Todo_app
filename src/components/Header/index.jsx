  import { useState } from 'react';
  import styles from './header.module.css';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faRocket,faCirclePlus } from '@fortawesome/free-solid-svg-icons';


function Header({onAddTask}) {
 
  const [title , setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(title);
    setTitle('');
  }

   const onChangeTitle = (e) => {
    setTitle(e.target.value);
  }

  return (
    <>
    <header className={styles.header}>
    <h1>
    <FontAwesomeIcon
    icon={faRocket}
    /> 
    <span>to</span>
    <span>do</span>
    </h1>
   <form onSubmit={handleSubmit} className={styles.newTaskForm}>
    <input type="text" placeholder='Add a new task' value={title} onChange = {onChangeTitle}/>
    <button>Create
        <FontAwesomeIcon
        icon={faCirclePlus}
        />
    </button>
   </form>
   </header>

    </>
  )
}

export default Header