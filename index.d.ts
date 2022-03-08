declare module '*.svg' {
  const ReactComponent: React.FC<React.SVGProps<SVGElement>>;
  const content: string;

  export { ReactComponent };
  export default content;
}

