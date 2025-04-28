import styles from './styles.module.css';

type HeadingProps = {
  children: string;
};

export default function Heading({ children }: HeadingProps) {

  return <div className={styles.heading}>{children}</div>;
  
}
