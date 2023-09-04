import { Text, TouchableOpacity, View } from "react-native"
import styles from "./styles"
import { useState } from "react"

export function Home() {
  
  const [valorUm, setValorUm] = useState(0)
  const [valorDois, setValorDois] = useState(0)

  function aumentarValorUm() {
    setValorUm(valorUm + 1)
  }

  function aumentarValorDois() {
    setValorDois(valorDois + 1)
  }

  function diminuirValorUm() {
    setValorUm(valorUm - 1)
  }

  function diminuirValorDois() {
    setValorDois(valorDois - 1)
  }

  function zerar() {
    setValorUm(0)
    setValorDois(0)
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>MARCADOR DE TRUCO</Text>
      </View>

      <View style={styles.section}>
      <View style={styles.assection}>
        <Text style={styles.subTitleNos}>NÓS</Text>
        <Text style={styles.subTitleEles}>ELES</Text>
      </View>
      <View style={styles.assection}>
        <Text style={styles.textValorUm}>{valorUm}</Text>
        <Text style={styles.textValorDois}>{valorDois}</Text>
      </View>
      </View>

      <View style={styles.footer}>

        <View style={styles.assection}>
        <TouchableOpacity style={styles.greenButton} onPress={aumentarValorUm}>
          <Text style={styles.textButton}>+1</Text>
          </TouchableOpacity>

        <TouchableOpacity style={styles.greenButton} onPress={aumentarValorDois}>
          <Text style={styles.textButton}>+1</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.assection}>
        <TouchableOpacity style={styles.redButton} onPress={diminuirValorUm}>
          <Text style={styles.textButton}>+1</Text>
          </TouchableOpacity>

        <TouchableOpacity style={styles.redButton} onPress={diminuirValorDois}>
          <Text style={styles.textButton}>-1</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.assection}>
        <TouchableOpacity style={styles.zerarButton} onPress={zerar}>
          <Text style={styles.textButton}>Zerar</Text>
        </TouchableOpacity>
        </View>
        
      </View>

    </View>
  )
}