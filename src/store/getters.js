export default {
  animalsCount: (state) => {
    return { cats: state.cats.length, dogs: state.dogs.length }
  }
}
