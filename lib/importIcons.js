let importAll=(requireContext)=>requireContext.keys().forEach(requireContext)
try {
  importAll(require.context('./icon',true,/\.svg$/))
}catch (e) {
  console.log(e)
}