<template>
    <div id="work">
        <header class="head-index">
            <div class="head-index-logo">
                <span>{{city}}</span>
            </div>
        </header>
        <section class="work-nav">
            <v-navigation-drawer
                stateless
                value="true"
                class="nav-left"
            >
                <v-list>
                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon>home</v-icon>
                            </v-list-tile-action>
                                <v-list-tile-title>Basic</v-list-tile-title>
                            </v-list-tile>
                            <v-list-group
                                prepend-icon="account_circle"
                                value="true"
                            >
                            <v-list-tile slot="activator">
                            <v-list-tile-title>Users</v-list-tile-title>
                            </v-list-tile>

                            <v-list-group
                                no-action
                                sub-group
                                value="true"
                                >
                                <v-list-tile slot="activator">
                                    <v-list-tile-title>Admin</v-list-tile-title>
                                </v-list-tile>

                                <v-list-tile
                                    v-for="(admin, i) in admins"
                                    :key="i"
                                    @click=""
                                >
                                    <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
                                    <v-list-tile-action>
                                    <v-icon v-text="admin[1]"></v-icon>
                                    </v-list-tile-action>
                                </v-list-tile>
                                </v-list-group>

                                <v-list-group
                                sub-group
                                no-action
                                >
                                <v-list-tile slot="activator">
                                    <v-list-tile-title>Actions</v-list-tile-title>
                                </v-list-tile>

                                <v-list-tile
                                    v-for="(crud, i) in cruds"
                                    :key="i"
                                    @click=""
                                >
                                    <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
                                    <v-list-tile-action>
                                    <v-icon v-text="crud[1]"></v-icon>
                                    </v-list-tile-action>
                                </v-list-tile>
                                </v-list-group>
                            </v-list-group>
                            </v-list>
                    </v-navigation-drawer>
        </section>       
    </div>
    
</template>
<script>
  export default {
    data: () => ({
      admins: [
        ['Management', 'people_outline'],
        ['Settings', 'settings']
      ],
      cruds: [
        ['Create', 'add'],
        ['Read', 'insert_drive_file'],
        ['Update', 'update'],
        ['Delete', 'delete']
      ]
    }),
    computed: {
        city:function() {
            return this.$store.getters.getCity;
        }
    }
  }
</script>
<style lang='scss'>
    @import '../../style/mixin.scss';

    #work{
        .head-index {
            @include wh(100%, 100px);
            background-color: #fff;
            box-shadow: 0 1px 0 0 #ddd;
            .head-index-logo span{
                text-align: left;
                font-size: 40px;
            }
        }
        .work-nav {
            @include wh(100%, 300px);
            background-color: #ddd;
            margin-top: 0!important;
            .nav-left {
                @include mg(0, 0, 0, 20px);  
            }
        }
    }
</style>