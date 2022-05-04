<template>
  <div>
    <input class="btn-check" type="radio" :name="groupName" :id="inputId" autocomplete="off"
           :value="item.value" :checked="item.checked" @change="change">
    <label class="btn btn-sm btn-outline-light" :for="inputId" :title="item.title"
           data-bs-placement="bottom">
      <i :class="iconClasses"></i>
    </label>
  </div>
</template>

<script>
import { Tooltip } from 'bootstrap';

export default {
  name: 'RadioItem',
  props: {
    group: {
      type: String,
      required: true,
    },
    item: {
      type: Object,
      required: true,
    },
    task: {
      type: Object,
      required: true,
    },
    change: {
      type: Function,
      default: () => {},
    },
  },
  computed: {
    groupName() {
      return `${this.group}-${this.task.id}`;
    },
    iconClasses() {
      return `bi bi-${this.item.icon}`;
    },
    inputId() {
      return `${this.groupName}-${this.item.value}`;
    },
  },
  mounted() {
    this.$el.querySelectorAll('label').forEach((el) => new Tooltip(el));
  },
};
</script>

<style scoped lang="scss">
@import '~@/styles/config';

.btn-check {
  &:active, &:checked, &:hover {
    & + label > .bi {
      &.blue {
        color: $primary;
      };

      &.green {
        color: $success;
      };

      &.purple {
        color: $purple;
      };

      &.red {
        color: $danger;
      };

      &.yellow {
        color: $warning;
      };
    };
  };
};
</style>
