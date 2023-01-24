<script lang="ts">
import type { OrganizationResponse } from '@/model/OrganizationModel';

    export default {
        data() {
            return {
                dummy: {
                    data: [
                        {
                            id: 1,
                            name: "I am Peter Parker",
                            rec_status: 1,
                            timestamp: "2022-10-29T12:21:55.978+00:00"
                        },
                        {
                            id: 2,
                            name: "I am Steve Roger",
                            rec_status: 1,
                            timestamp: "2022-10-29T12:21:55.978+00:00"
                        },
                        {
                            id: 3,
                            name: "I am Thor Odinson",
                            rec_status: 0,
                            timestamp: "2022-10-29T12:21:55.978+00:00"
                        },
                        {
                            id: 4,
                            name: "I am Bruce Banner",
                            rec_status: 0,
                            timestamp: "2022-10-29T12:21:55.978+00:00"
                        },
                    ]
                } as OrganizationResponse
            }
        }
    }
</script>
<template>
    <div class="table-responsive-md">
        <table class="table topics">
            <thead>
                <tr class="table-active">
                    <th class="font-weight-bold">ID</th>
                    <th class="font-weight-bold" colspan="2">Name</th>
                    <th class="font-weight-bold">Status</th>
                </tr>
            </thead>
            <tbody class="tbody-responsive">
                <template v-for="org in dummy.data">
                    <tr>
                        <th class="font-weight-bold">{{ org.id }}</th>
                        <td colspan="2">{{ org.name }}</td>
                        <td :class="org.rec_status == 1 ? 'table-success' : 'table-danger'">{{ org.rec_status == 1 ? "Active" : "Inactive" }}</td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>
<style scoped>
    .topics tr { line-height: 40px; }
</style>