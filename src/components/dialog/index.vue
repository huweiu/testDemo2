<template>
    <div>
        <el-button plain @click="dialogVisible = true">
            Click to open the Dialog
        </el-button>

        <el-dialog
            v-model="dialogVisible"
            title="Tips"
            width="500"
            :before-close="handleClose"
        >
            <span>This is a message</span>
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="dialogVisible = false">Cancel</el-button>
                    <el-button id="test" type="primary" @click="dialogVisible = false">
                    Confirm
                    </el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const dialogVisible = ref(false)
</script>

<style lang="scss" scoped>

</style>