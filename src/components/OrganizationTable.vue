<script lang="ts">
import type { OrganizationResponse } from '@/model/OrganizationModel';
import { OrganizationService } from '@/service/OrganizationService';

    export default {
        name: "OrganizationTable",
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
                } as OrganizationResponse,
                orgs: {} as OrganizationResponse
            }
        },
        async created() {
            await this.getOrganization()
        },
        methods: {
            async getOrganization() {
                try {
                    const result = await OrganizationService.get()
                    this.orgs = result
                }
                catch(err) {
                    throw(err)
                }
            }
        }
    }
</script>
<template>
    <div class="table-responsive">
        <table class="table topics" style="width:100%">
            <col style="width: 30%;" />
            <col style="width: 40%;" />
            <col style="width: 30%;" />
            <thead>
                <tr class="table-active">
                    <th class="font-weight-bold">ID</th>
                    <th class="font-weight-bold cell-fix-width">Name</th>
                    <th class="font-weight-bold">Status</th>
                </tr>
            </thead>
            <tbody class="tbody-responsive">
                <template v-for="org in orgs.data" :key="org.id">
                    <tr>
                        <th class="font-weight-bold">{{ org.id }}</th>
                        <td class="cell-fix-width">{{ org.name }}</td>
                        <td :class="org.rec_status == 1 ? 'table-success' : 'table-danger'">{{ org.rec_status == 1 ? "Active" : "Inactive" }}</td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>
<style scoped>
    .topics tr { line-height: 30px; }
    .table-responsive { height: 600px !important;}
    .cell-fix-width {
        max-width: 100px; /*or whatever*/
        text-overflow: ellipsis;
        overflow: hidden; 
        white-space: nowrap;
    }
</style>