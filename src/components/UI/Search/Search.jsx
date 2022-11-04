import styles from "./Search.module.scss";

const Search = ()=> {
 
    return (
      <div className={styles.search}>
          <div className="box">
             <i className="bx bx-search-alt"></i>
              <input type='text' placeholder=' Найти' />
          </div>
          
      </div>
    )
}
export default Search;