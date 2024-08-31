from fpdf import FPDF
import os
import firebase_admin
from firebase_admin import firestore
from google.cloud import storage
from datetime import date

class PDF(FPDF):
    def header(self):
        # Logo
        self.image('logo.png', 10, 8, 20)
        # Arial bold 15
        self.set_font('Arial', 'B', 25)
        # Move to the right
        self.cell(30)
        # Title
        self.cell(30, 10, 'ModelosCAD.UN')
        # Line break
        self.ln(30)

    # Page footer
    def footer(self):
        # Position at 1.5 cm from bottom
        self.set_y(-15)
        # Arial italic 8
        self.set_font('Arial', 'I', 8)
        # Page number
        self.cell(0, 10, 'Page ' + str(self.page_no()) + '/{nb}', 0, 0, 'C')

def create_folder_if_not_exists(bucket_name, folder_name):
  """Creates a folder in the specified Google Cloud Storage bucket if it doesn't already exist.

  Args:
    bucket_name: The name of the bucket.
    folder_name: The name of the folder to create.
  """

  storage_client = storage.Client.from_service_account_json('amiable-bridge-431900-v7-cfba2ebeb106.json')
  bucket = storage_client.bucket(bucket_name)

  # List all blobs in the bucket with the specified prefix
  blobs = bucket.list_blobs(prefix=folder_name)

  # Check if any blobs exist with the prefix (indicating the folder exists)
  folder_exists = any(blob.name.endswith("/") for blob in blobs)

  if not folder_exists:
    blob = bucket.blob(folder_name + "/")
    blob.upload_from_string("")
    print(f"Folder {folder_name} created.")
  else:
    print(f"Folder {folder_name} already exists.")



def generate_PDF(Nombre_cliente,numero_orden,capacidad,dm_cont_princ,ln_cont_principal,espesor,costo,archivo,folder,numero_unidades="1",direccion="",celular="",email="", ):
    pdf = PDF()
    pdf.add_page()
    pdf.set_font('Arial', '', 10)
    pdf.line(10,35,200,35)
    pdf.cell(10, 0, str(date.today().strftime("%B %d, %Y")))
    pdf.ln(10)
    pdf.cell(10, 0, "Señor(a):")
    pdf.ln(10)
    pdf.set_font('Arial', 'B', 12)
    pdf.cell(10, 0, Nombre_cliente)
    pdf.ln(10)
    pdf.set_font('Arial', '', 10)
    pdf.cell(10, 0, "Direccion: "+direccion)
    pdf.ln(10)
    pdf.cell(10, 0, "Cel: " + celular)
    pdf.ln(10)
    pdf.cell(10, 0, "E-mail: " + email)
    pdf.ln(10)
    pdf.multi_cell(190, 5, "De acuerdo a sus deseos e indicaciones, hemos preparado nuestro presupuesto #" + numero_orden +
                   " que tenemos el gusto de acompañar a la presente carta. Ésta carta tiene la finalidad deexplicar las características y " +
                   "ventajas que ofrecen nuestros equipos de ModelosCAD.UN.")
    pdf.ln(5)
    pdf.multi_cell(190, 5, "Nuestro presupuesto describe, especifica y cotiza una ("+numero_unidades+") caldera de vapor tipo horizontal de ModelosCAD.UN" + 
                  "con una capacidad de " + capacidad + ", un diametro del contenedor principal de "+ dm_cont_princ + ", longitud del contenedor principal de "
                  + ln_cont_principal + " y un espesor de aislamiento de " + espesor + ".")
    pdf.ln(5)
    pdf.multi_cell(190, 5, "Teniendo en cuenta las especificaciones dadas para la fabricacion de la caldera con nosotros el monto total seria:")
    pdf.ln(5)
    pdf.set_font('Arial', 'B', 15)
    pdf.cell(190, 5, "$ " + costo)
    pdf.ln(5)
    pdf.set_font('Arial', '', 10)
    pdf.output(f"{archivo}.pdf", 'F')

    # bucket_name = 'modeloscad-un-pdf-estimations-archive'
    # destination_blob_name = (folder+"/"+f"{archivo}.pdf")
    # create_folder_if_not_exists(bucket_name,folder)
    # upload_to_cloud(bucket_name,f"{archivo}.pdf",destination_blob_name)
    # return f"https://storage.googleapis.com/{bucket_name}/{destination_blob_name}"

def upload_to_cloud(bucket_name,file_to_upload,destination_blob_name):
    client = storage.Client.from_service_account_json('amiable-bridge-431900-v7-cfba2ebeb106.json')
    bucket = client.bucket(bucket_name)
    blob = bucket.blob(destination_blob_name)
    blob.upload_from_filename(file_to_upload)
    print("Uploaded successfully") 

print(generate_PDF("Carlos Narvaez","12587","100 L","(diametro)","(longitud)","(espesor)","999,999","Carlos_Narvaez","asdf",))