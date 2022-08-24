export default {
  name: "ready",
  once: true,
  execute(clnt) {
    console.log(`Ready! Logged as ${clnt.user.tag}`);
  },
};
