<template >
    <div class="h-100">
   
        <div class="d-flex flex-column justify-center pa-6 d-sm-none"  style="color: black; background-image: url('/img/forms/4.jpg'); background-size: cover; ">
            <div class="">
                <v-img src="/img/main/imgmci.png" cover max-width="50" class="mx-auto"></v-img>
                <p class="w-100 mx-auto my-4 px-4 text-center text-h5">Obtenha <strong>todo o potencial na sua manutenção </strong>de forma simples e estruturada</p>
            </div>
            <div>
                <v-container>
                    <v-row>
                        <v-col cols="12"><v-img src="/img/main/img2mci.jpeg"></v-img></v-col>
                        <v-col cols="12"> <p class="text-body-2 ">Desenvolvido pela Pred Engenharia, o método MCI® trouxe uma perspectiva inovadora que, diferente de outros métodos existentes no mercado, promove a integração da cadeia de valores da Manutenção através de atribuições e entregáveis claramente definidos e auditáveis...
                        </p>
                        
                        <v-btn
                        append-icon="mdi-arrow-top-right"
                        variant="flat"
                        
                        size="small"
                        class="mt-6"
                        color="#B71C1C"
                        to="/mci"
                        >Saiba mais sobre o método</v-btn></v-col>
                    </v-row>    
                </v-container>                
            </div>                
        </div> 

        <!-- desktop -->
        <div class="d-none d-sm-flex h-100">
            <div class="d-flex">
                <div
                class="d-flex flex-column justify-center pa-6 w-50"  style="background-image: url('/img/forms/4.jpg'); background-size: cover; " 
                >
                    <div>
                        <v-img src="/img/main/imgmci.png" cover max-width="50" class="mx-auto"></v-img>
                        <p class="w-100 mx-auto my-4 px-4 text-center text-h6">Obtenha <strong>todo o potencial na sua manutenção </strong>de forma simples e estruturada</p>
                    </div>
                    <div>
                        <v-img src="/img/main/img2mci.jpeg" max-width="700" class="mx-auto my-6"></v-img>
                        <p class="text-body-1  mt-8">Desenvolvido pela Pred Engenharia, o método MCI® trouxe uma perspectiva inovadora que, diferente de outros métodos existentes no mercado, promove a integração da cadeia de valores da Manutenção através de atribuições e entregáveis claramente definidos e auditáveis...
                        </p>
                        <v-btn
                        append-icon="mdi-arrow-top-right"
                        variant="flat"
                        class=" mt-8"
                        color="#B71C1C"
                        to="/mci"
                    
                        >Saiba mais sobre o método</v-btn>
                    </div>
                </div>
                <div style="background-image: url('/img/mci/8.jpg'); background-size: cover;" class="w-50">
                </div>
            </div>


        </div>



    </div> 
</template>