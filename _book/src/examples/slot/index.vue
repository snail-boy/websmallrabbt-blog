<template>
    <div>
        <navigation-link url="/profile">
            Your Profile
        </navigation-link>
        <submit-button>保存</submit-button>

        <base-layout>
            <template #header>
                <h1>Here might be a page title</h1>
            </template>

            <template #default>
                <p>A paragraph for the main content.</p>
                <p>And another one.</p>
            </template>

            <template #footer>
                <p>Here's some contact info</p>
            </template>
        </base-layout>

        <scope-slot  #user="{ user }">
            {{ user.firstName }}
        </scope-slot>

    </div>
</template>

<script>
    import NavigationLink from './navigation-link'
    import SubmitButton from './submit-button'
    import BaseLayout from "./base-layout";
    import ScopeSlot from "./scope-slot";
    export default {
        name: "index",
        components: {
            ScopeSlot,
            BaseLayout,
            NavigationLink,
            SubmitButton
        },
        data() {
            return {
                // slotProps: {
                    user: {
                        firstName: "wang",
                        lastName: 'ke'
                    }
                // }

            }
        }
    }
</script>

<style scoped>

</style>
