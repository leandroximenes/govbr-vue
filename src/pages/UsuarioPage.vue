<template>
  <BreadCrumb></BreadCrumb>
  <Message
    message="Formulário enviado com sucesso!"
    type="success"
    v-if="submited"
  />
  <div class="p-3">
    <h1>Cadastro de usuário</h1>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <br-input
          type="text"
          id="nome"
          placeholder="Nome"
          label="Nome:"
          name="nome"
          v-model-form="nome"
          @blur="checkNome"
          :state="erros.nome ? 'danger' : null"
        ></br-input>
        <Message
          :message="erros.nome"
          v-if="erros.nome"
          feedback
          type="danger"
        />
      </div>

      <div class="mb-3">
        <div class="row">
          <div class="col">
            <br-input
              type="email"
              id="email"
              placeholder="E-mail"
              label="E-mail:"
              name="email"
              v-model-form="email"
              @blur="checkEmail"
              :state="erros.email ? 'danger' : null"
            ></br-input>
            <Message
              :message="erros.email"
              v-if="erros.email"
              feedback
              type="danger"
            />
          </div>
          <div class="col">
            <br-input
              type="text"
              id="telefone"
              placeholder="Ex.: (99) 99999-9999"
              label="Telefone:"
              name="telefone"
              v-model-form="telefone"
              mask="(##) #####-####"
              @blur="checkTelefone"
              :state="erros.telefone ? 'danger' : null"
            ></br-input>
            <Message
              :message="erros.telefone"
              v-if="erros.telefone"
              feedback
              type="danger"
            />
          </div>
        </div>
      </div>

      <div class="mb-3">
        <div class="row">
          <div class="col">
            <br-input
              type="password"
              id="senha"
              placeholder="Senha"
              label="Senha:"
              name="senha"
              ispassword
              v-model-form="senha"
              @blur="checkSenha"
              :state="erros.senha ? 'danger' : null"
            ></br-input>
            <Message
              :message="erros.senha"
              v-if="erros.senha"
              feedback
              type="danger"
            />
          </div>
          <div class="col">
            <br-input
              type="password"
              id="confirmarSenha"
              placeholder="Confirmar senha"
              label="Confirmar senha:"
              name="confirmarSenha"
              ispassword
              v-model-form="confirmarSenha"
              @blur="checkConfirmarSenha"
              :state="erros.confirmarSenha ? 'danger' : null"
            ></br-input>
            <Message
              :message="erros.confirmarSenha"
              v-if="erros.confirmarSenha"
              feedback
              type="danger"
            />
          </div>
        </div>
      </div>

      <div class="mb-3">
        <div class="row">
          <div class="col">
            <br-input
              type="text"
              id="cpf"
              placeholder="Ex.: 999.999.999-99"
              label="CPF:"
              name="cpf"
              v-model-form="cpf"
              mask="###.###.###-##"
              @blur="checkCPF"
              :state="erros.cpf ? 'danger' : null"
            ></br-input>
            <Message
              :message="erros.cpf"
              v-if="erros.cpf"
              feedback
              type="danger"
            />
          </div>
          <div class="col">
            <br-input
              type="text"
              id="dataNascimento"
              placeholder="Ex.: DD/MM/AAAA"
              label="Data de nascimento:"
              name="dataNascimento"
              v-model-form="dataNascimento"
              @blur="checkDataNascimento"
              mask="##/##/####"
              :state="erros.dataNascimento ? 'danger' : null"
            ></br-input>
            <Message
              :message="erros.dataNascimento"
              v-if="erros.dataNascimento"
              feedback
              type="danger"
            />
          </div>
        </div>
      </div>

      <div class="mb-3">
        <div class="row">
          <div class="col">
            <br-input
              type="text"
              id="endereco"
              placeholder="Endereço"
              label="Endereço: (Opcional)"
              name="endereco"
              v-model-form="endereco"
              :state="erros.endereco ? 'danger' : null"
            ></br-input>
          </div>
          <div class="col">
            <br-input
              type="text"
              id="cep"
              placeholder="Ex.: 99999-999"
              label="CEP: (Opcional)"
              name="cep"
              v-model-form="cep"
              mask="#####-###"
              :state="erros.cep ? 'danger' : null"
            ></br-input>
          </div>
        </div>
      </div>

      <div class="mt-3 d-flex justify-content-md-end">
        <br-button
          id="enviar"
          label="Enviar Formulário"
          type="primary"
          class="mt-3 mr-1"
          @click="submitForm()"
        ></br-button>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import BreadCrumb from "@/components/BreadCrumb.vue";
import Message from "@/components/Message.vue";

export default {
  name: "UsuarioPage",
  components: {
    BreadCrumb,
    Message,
  },
  data() {
    return {
      nome: "",
      email: "",
      telefone: "",
      senha: "",
      confirmarSenha: "",
      cpf: "",
      dataNascimento: "",
      endereco: "",
      cep: "",
      erros: {
        nome: "",
        email: "",
        telefone: "",
        senha: "",
        confirmarSenha: "",
        cpf: "",
        dataNascimento: "",
        endereco: "",
        cep: "",
      },
      submited: false,
    };
  },
  methods: {
    checkNome() {
      this.erros.nome = !this.nome ? "O campo Nome é obrigatório." : "";
    },
    checkEmail() {
      this.erros.email = !this.email ? "O campo E-mail é obrigatório." : "";
    },
    checkTelefone() {
      this.erros.telefone = !this.telefone
        ? "O campo Telefone é obrigatório."
        : "";
    },
    checkSenha() {
      this.erros.senha = !this.senha ? "O campo Senha é obrigatório." : "";
    },
    checkConfirmarSenha() {
      this.erros.confirmarSenha = !this.confirmarSenha
        ? "O campo Confirmar Senha é obrigatório."
        : "";
    },
    checkCPF() {
      this.erros.cpf = !this.cpf ? "O campo CPF é obrigatório." : "";
    },
    checkDataNascimento() {
      this.erros.dataNascimento = !this.dataNascimento
        ? "O campo Data de Nascimento é obrigatório."
        : "";
    },
    checkForm() {
      this.erros = {
        nome: "",
        email: "",
        telefone: "",
        senha: "",
        confirmarSenha: "",
        cpf: "",
        dataNascimento: "",
        endereco: "",
        cep: "",
      };

      if (!this.nome) {
        this.erros.nome = "O campo Nome é obrigatório.";
      }
      if (!this.email) {
        this.erros.email = "O campo E-mail é obrigatório.";
      }

      if (!this.telefone) {
        this.erros.telefone = "O campo Telefone é obrigatório.";
      }

      if (!this.senha) {
        this.erros.senha = "O campo Senha é obrigatório.";
      }

      if (!this.confirmarSenha) {
        this.erros.confirmarSenha = "O campo Confirmar Senha é obrigatório.";
      }

      if (!this.cpf) {
        this.erros.cpf = "O campo CPF é obrigatório.";
      }

      if (!this.dataNascimento) {
        this.erros.dataNascimento = "O campo Data de Nascimento é obrigatório.";
      }

      // Retorna true se não houver mensagens de erro
      return Object.keys(this.erros).length === 0;
    },
    hideMessage() {
      setTimeout(() => {
        this.submited = false;
      }, 20000);
    },

    submitForm() {
      const isFormValid = this.checkForm();

      if (isFormValid) {
        const data = {
          nome: this.nome,
          email: this.email,
          telefone: this.telefone,
          senha: this.senha,
          confirmarSenha: this.confirmarSenha,
          cpf: this.cpf,
          dataNascimento: this.dataNascimento,
          endereco: this.endereco,
          cep: this.cep,
        };

        this.hideMessage();
        this.submited = true;
      }
    },
  },
};
</script>
<style></style>
