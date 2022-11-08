import router from "next/router";

export const handleLocaleChange = (
  event: React.SyntheticEvent<HTMLSelectElement>
) => {
  const value = event.currentTarget.value;

  router.push(router.route, router.asPath, {
    locale: value,
  });
};
