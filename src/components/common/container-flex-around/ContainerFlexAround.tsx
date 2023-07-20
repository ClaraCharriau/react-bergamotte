import style from "./ContainerFlexAround.module.css";

interface ContainerProps {
  children: JSX.Element | JSX.Element[];
  title?: string;
}

const ContainerFlexAround = (props: ContainerProps) => {
  const { children, title } = props;
  return (
    <section className={style.section}>
      <h2>{ title }</h2>
      <ul className={style.flexAround}>{children}</ul>
    </section>
  );
};

export default ContainerFlexAround;
