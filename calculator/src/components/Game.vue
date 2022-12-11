<template>
    <section class="game">
        <article class="game-header-buttons">
            <el-button @click="cancel">Отмена</el-button>
            <el-input disabled :placeholder="refs.time" />
        </article>
        <article class="game-inputs">
            <el-input
                @focus="focusedElement = 1"
                ref="inputValueOneRef"
                v-model="refs.inputValueOne"
                v-maska
                data-maska="#####"
            />
            <span>{{ refs.mark }}</span>
            <el-input
                @focus="focusedElement = 2"
                ref="inputValueTwoRef"
                v-model="refs.inputValueTwo"
                v-maska
                data-maska="#####"
            />
            <span>{{ refs.mark }}</span>
            <el-input
                @focus="focusedElement = 3"
                ref="inputValueThreeRef"
                v-model="refs.inputValueThree"
                v-maska
                data-maska="#####"
            />
            <span>=</span>
            <span>{{ refs.resultValue }}</span>
        </article>
        <section class="game-buttons">
            <article>
                <el-button size="large" circle @click="enterValue(1)"
                    >1</el-button
                >
                <el-button size="large" circle @click="enterValue(2)"
                    >2</el-button
                >
                <el-button size="large" circle @click="enterValue(3)"
                    >3</el-button
                >
                <el-button size="large" type="warning" circle @click="toLeft"
                    >&lt;</el-button
                >
            </article>

            <article>
                <el-button size="large" circle @click="enterValue(4)"
                    >4</el-button
                >
                <el-button size="large" circle @click="enterValue(5)"
                    >5</el-button
                >
                <el-button size="large" circle @click="enterValue(6)"
                    >6</el-button
                >
                <el-button size="large" type="warning" circle @click="toRight"
                    >></el-button
                >
            </article>

            <article>
                <el-button size="large" circle @click="enterValue(7)"
                    >7</el-button
                >
                <el-button size="large" circle @click="enterValue(8)"
                    >8</el-button
                >
                <el-button size="large" circle @click="enterValue(9)"
                    >9</el-button
                >
                <el-button size="large" type="warning" circle>?</el-button>
            </article>

            <article>
                <el-button size="large" circle>0</el-button>
                <el-button size="large" type="warning" circle>=</el-button>
            </article>
        </section>
        <p>{{ usersResult }}</p>
    </section>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
// import { Marks, FocusElement } from "../Enums";
import { IUserSettings } from "../Inteface";
import type { InputInstance } from "element-plus";
import { vMaska } from "maska";

const router = useRouter();
const route = useRoute();

const focusedElement = ref(1);

const refs = ref({
    time: "15:00",
    inputValueOne: "",
    inputValueTwo: "",
    inputValueThree: "",
    resultValue: "23456",
    mark: "+"
});

let settings: IUserSettings | unknown = reactive({
    difficult: 0,
    duration: 0,
    checkList: []
});

const inputValueOneRef = ref<InputInstance>();
const inputValueTwoRef = ref<InputInstance>();
const inputValueThreeRef = ref<InputInstance>();

const usersResult = computed(
    () => +refs.value.inputValueOne + +refs.value.inputValueOne
);

const enterValue = (value: number) => {
    
    switch (focusedElement.value) {
        case 1:
            return refs.value.inputValueOne.length <= 4
                ? (refs.value.inputValueOne += value)
                : "";

        case 2:
            return refs.value.inputValueTwo.length <= 4
                ? (refs.value.inputValueTwo += value)
                : "";

        case 3:
            return refs.value.inputValueTwo.length <= 4
                ? (refs.value.inputValueThree += value)
                : "";
        default:
            return "";
    }
};
// watch(
//     () => refs.value.inputValueOne,
//     (newValue, oldValue) => {
//         console.log(newValue);
//     },
//     { deep: true }
// );

// switch (refs.value.mark) {
//         case Marks.Plus:
//             const result =
//                 refs.value.inputValueOne +
//                 refs.value.inputValueTwo +
//                 refs.value.inputValueThree;
//             console.log(result);

//             return result;
//         case Marks.Minus:
//             return "";
//         case Marks.Multiply:
//             return "";
//         case Marks.Divide:
//             return "";
//         case Marks.Exponentiation:
//             return "";
//     }

const onSubmit = () => {
    console.log("submit!");
};

const cancel = (): void => {
    router.push({ name: "Main" });
};

const toRight = () => {
    switch (focusedElement.value) {
        case 1:
            return inputValueTwoRef.value?.focus(), (focusedElement.value = 2);
        case 2:
            return (
                inputValueThreeRef.value?.focus(), (focusedElement.value = 3)
            );
        default:
            return inputValueOneRef.value?.focus(), (focusedElement.value = 1);
    }
};
const toLeft = () => {
    switch (focusedElement.value) {
        case 3:
            return inputValueTwoRef.value?.focus(), (focusedElement.value = 2);
        case 2:
            return inputValueOneRef.value?.focus(), (focusedElement.value = 1);
        default:
            return (
                inputValueThreeRef.value?.focus(), (focusedElement.value = 3)
            );
    }
};

onMounted(() => {
    settings = JSON.parse(localStorage.getItem("userSettings") || "");
    inputValueOneRef.value?.focus();
});
</script>

<style>
.game {
    width: 400px;
}
.game-header-buttons {
    display: flex;
    justify-content: space-between;
}
.game-header-buttons .el-input {
    width: 60px;
}
.game-inputs .el-input__wrapper input {
    text-align: center;
}
.game-inputs .el-input {
    width: 60px;
}
.game-inputs {
    display: flex;
    justify-content: center;
    margin-top: 100px;
    gap: 0 10px;
}
.game-inputs .el-input__wrapper {
    box-shadow: none;
}
.game-inputs .el-input__wrapper .el-input__inner {
    box-shadow: none;
    border-bottom: 1px solid var(--el-bg-color-page);
}
.game-inputs > span {
    display: flex;
    align-items: center;
}
.game-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    gap: 20px 0;
}
.game-buttons article {
    gap: 0 10px;
    display: flex;
}
</style>
