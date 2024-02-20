<template>
    <div class="burger-menu" :class="{ 'active': opened }">
        <div>
            <div class="burger-menu__up">
                <div>
                    <button bg="white" @click="$emit('close')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path
                                d="M5.9987 7.16668L1.91536 11.25C1.76259 11.4028 1.56814 11.4792 1.33203 11.4792C1.09592 11.4792 0.901475 11.4028 0.748698 11.25C0.59592 11.0972 0.519531 10.9028 0.519531 10.6667C0.519531 10.4306 0.59592 10.2361 0.748698 10.0833L4.83203 6.00001L0.748698 1.91668C0.59592 1.7639 0.519531 1.56945 0.519531 1.33334C0.519531 1.09723 0.59592 0.902788 0.748698 0.75001C0.901475 0.597232 1.09592 0.520844 1.33203 0.520844C1.56814 0.520844 1.76259 0.597232 1.91536 0.75001L5.9987 4.83334L10.082 0.75001C10.2348 0.597232 10.4293 0.520844 10.6654 0.520844C10.9015 0.520844 11.0959 0.597232 11.2487 0.75001C11.4015 0.902788 11.4779 1.09723 11.4779 1.33334C11.4779 1.56945 11.4015 1.7639 11.2487 1.91668L7.16537 6.00001L11.2487 10.0833C11.4015 10.2361 11.4779 10.4306 11.4779 10.6667C11.4779 10.9028 11.4015 11.0972 11.2487 11.25C11.0959 11.4028 10.9015 11.4792 10.6654 11.4792C10.4293 11.4792 10.2348 11.4028 10.082 11.25L5.9987 7.16668Z"
                                fill="#FFA765" />
                        </svg>
                    </button>
                </div>
            </div>

            <div class="burger-menu__down">
                <nav class="burger-menu__nav">
                    <HeaderLink />
                </nav>
            </div>
        </div>
        <div>
        </div>

        <a href="tel:{{ getFirstPhone() }}" class="burger-menu__phone-number">{{ getFirstPhone() }}</a>
    </div>
</template>
  
<script>
import HeaderLink from "@/components/header/HeaderLink.vue";

export default {
    name: "BurgerMenu",
    components: { HeaderLink },
    props: {
        opened: {
            type: Boolean,
            default: false
        },
        headerLinks: {
            type: Array,
            default: []
        },
        getFirstPhone: {
            type: Function,
            required: true
        }
    },
}
</script>
  
<style scoped lang="scss">
.burger-menu {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 25px;
    padding-bottom: 24px;
    width: 395px;
    height: 100vh;
    -ms-overflow-y: auto;
    overflow-y: auto;
    background: #F5F5F5;
    box-shadow: 4px 4px 24px rgba(0, 0, 0, .15);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 900;

    &.active {
        display: flex;
    }

    &__up {
        display: flex;
        flex-direction: column;
        row-gap: 16px;
        padding: 8px 16px 18px;
        background: #FFFFFF;

        &>div {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }

    &__down {
        padding: 16px 16px 0;
    }

    &__nav {
        display: flex;
        flex-direction: column;
        row-gap: 24px;
        padding: 8px 0 0;
    }

    &>div:last-child {
        padding: 0 16px;
    }

    &__sidebar {
        padding-bottom: 8px;
        width: 100%;

        &-buttons {
            height: 40px;
            background: rgba(0, 0, 0, 0.05);
            border-radius: 12px;

            &_mb-8 {
                margin-bottom: 8px;
            }
        }

        &::v-deep {
            & .sidebar {
                &__networks {
                    padding: 0 38px 0 12px;
                    text-align: start;
                }

                &__line {
                    padding-right: 24px;
                }
            }
        }
    }

    &__phone-number {
        padding-left: 16px;
        font-weight: 700;
        font-size: 18px;
        color: #24c8bc;
        transition: .25s;

        &:hover {
            color: #3bbbb1;
            transition: .25s;
        }
    }
}
</style>
  