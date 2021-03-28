<script lang="jsx">
import { ref } from 'vue'

export default {
  setup() {
    const counter = ref(0)
    const onclick = () => {
      counter.value++
    }
    return () => (
        <>
          <div>comp</div>
          <p onClick={onclick}>{counter.value}</p>
        </>
    )
  }
}

// // 原始jsx
// export default {
//   name: "Comp",
//   data() {
//     return {
//       counter: 0
//     }
//   },
//   methods: {
//     onclick() {
//       this.counter++
//     }
//   },
//   render() {
//     return (
//         <>
//           <div>comp</div>
//           <p onClick={this.onclick}>{this.counter}</p>
//         </>
//     )
//   }
// }
</script>

<style scoped>

</style>
