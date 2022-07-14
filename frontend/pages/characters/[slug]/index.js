import { useRouter } from "next/router";

const Character = () => {
  const router = useRouter();
  const { slug } = router.query;

  return <h1>Character: {slug}</h1>;
};

export default Character;
