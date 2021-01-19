class ValueHolder<T> {
  value: T;
}

const numberHolder = new ValueHolder<number>();
numberHolder.value;

const stringHolder = new ValueHolder<string>();
stringHolder.value;
