import { FiSearch } from 'react-icons/fi';
import toast from 'react-hot-toast';
import style from './Form.module.css'

export const Form = ({onSubmit}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.search.value.trim();
    if (!value) {
      toast.error('Your query is empty!');
      return;
    } 
      onSubmit(value);   
  }
  

  return (
    <form className={style.form} onSubmit={handleSubmit}>
  <button className={style.button} type="submit">
    <FiSearch size="16px" />
  </button>

  <input
    className={style.input}
    placeholder="What do you want to write?"
    name="search"  
    autoFocus
  />
</form>
  )
};
