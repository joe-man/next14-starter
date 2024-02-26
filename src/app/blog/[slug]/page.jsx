import Image from "next/image";
import styles from "./singlepost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Johnson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet ut augue tincidunt pretium. Curabitur commodo ac quam vel rutrum. Aenean sagittis luctus condimentum. Sed condimentum
          laoreet fermentum. Integer a lectus quis mi rutrum pulvinar. Maecenas rhoncus est odio, eget dapibus velit viverra in. Aenean ut velit a risus placerat laoreet. Duis nec eros eu metus luctus
          placerat. Donec placerat et massa non euismod. Sed dignissim augue sed volutpat fringilla. Fusce vitae venenatis arcu. Suspendisse ut nunc eu orci feugiat congue. Curabitur et sem odio.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
