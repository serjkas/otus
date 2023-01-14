<template>
    <el-form
        class="settings-form"
        :model="userSettings"
        label-width="120px"
        label-position="top"
    >
        <h1 class="settings-header">Привет!</h1>

        <article class="settings-info">
            <span>Добро пожаловать на {{ refs.day }} тренировачный день</span>
            <span
                >Ваш последний результат - решено {{ refs.solved }} из
                {{ refs.maxSolved }}</span
            >
            <span>Общая точность {{ solvedPercent }}%</span>
        </article>

        <el-form-item :label="`Длительность ${userSettings.duration} минут`">
            <el-slider
                v-model="userSettings.duration"
                :max="elemetSettings.maxDifficult"
                :min="elemetSettings.minSlider"
            />
        </el-form-item>
        <el-form-item :label="`Сложность ${userSettings.difficult}`">
            <el-slider
                v-model="userSettings.difficult"
                :max="elemetSettings.maxDuration"
                :min="elemetSettings.minSlider"
            />
        </el-form-item>
        <el-form-item>
            <el-checkbox-group
                class="settings-action"
                v-model="userSettings.checkList"
            >
                <el-checkbox :label="Marks.Plus">Суммирование</el-checkbox>
                <el-checkbox :label="Marks.Minus">Разность</el-checkbox>
                <el-checkbox :label="Marks.Multiply">Умножение</el-checkbox>
                <el-checkbox :label="Marks.Divide">Деление</el-checkbox>
            </el-checkbox-group>
        </el-form-item>

        <article class="settings-button">
            <el-button type="primary" @click="onSubmit">Начать</el-button>
        </article>
    </el-form>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { reactive, onMounted, ref, computed } from "vue";
import { IUserData } from "../Inteface";
import { Marks } from "../Enums";

const router = useRouter();

const elemetSettings = {
    maxDifficult: 15,
    maxDuration: 10,
    minSlider: 1
};

const refs = ref({
    day: "",
    solved: "",
    maxSolved: ""
});
const solvedPercent = computed(
    () => (+refs.value.solved / +refs.value.maxSolved) * 100
);

const userSettings = reactive({
    difficult: 0,
    duration: 0,
    checkList: []
});

const onSubmit = (): void => {
    localStorage.setItem("userSettings", JSON.stringify(userSettings));
    router.push({ name: "Game" });
};

onMounted(() => {
    const localUserData = localStorage.getItem("userData") || "";
    let userData: IUserData = localUserData ? JSON.parse(localUserData) : "";
    if (userData) {
        refs.value.day = userData.day;
        refs.value.solved = userData.solved;
        refs.value.maxSolved = userData.maxSolved;
    }
    if (!userData) {
        userData = {
            solved: "0",
            maxSolved: "25",
            day: "1"
        };
        localStorage.setItem("userData", JSON.stringify(userData));
    }
});
</script>

<style scoped>
.settings-form {
    display: flex;
    flex-direction: column;
}

.settings-header {
    font-size: 24px;
}
.settings-info {
    flex-direction: column;
    display: flex;
    gap: 5px;
    margin: 50px 0 20px 0;
}
.settings-action {
    flex-direction: column;
    display: flex;
}

.settings-button {
    display: flex;
    justify-content: flex-end;
}
</style>
