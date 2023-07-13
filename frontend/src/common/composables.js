import {computed} from "vue";
import {getTimeAgo} from "@/common/helpers";

export const useTaskCardDate = (task) => {
  return computed(() => {
    return `# ${task.id} создана ${getTimeAgo(task.dueDate)}`
  })
}
